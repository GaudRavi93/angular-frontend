import { filter, Subscription } from 'rxjs';
import { CoreService } from "./services/core.service";
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { AppTopBarComponent } from '../../shared/components/topbar/app.topbar.component';
import { AppSidebarComponent } from '../../shared/components/sidebar/app.sidebar.component';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html'
})
export class CoreComponent implements OnDestroy {

    menuOutsideClickListener: any;
    profileMenuOutsideClickListener: any;
    overlayMenuOpenSubscription: Subscription;
    @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;
    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

    constructor(public coreService: CoreService, public renderer: Renderer2, public router: Router) {
        this.overlayMenuOpenSubscription = this.coreService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) 
                        || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
                    
                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }

            if (!this.profileMenuOutsideClickListener) {
                this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
                        || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

                    if (isOutsideClicked) {
                        this.hideProfileMenu();
                    }
                });
            }

            if (this.coreService.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.hideMenu();
                this.hideProfileMenu();
            });
    }

    hideMenu() {
        this.coreService.state.overlayMenuActive = false;
        this.coreService.state.staticMenuMobileActive = false;
        this.coreService.state.menuHoverActive = false;
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    hideProfileMenu() {
        this.coreService.state.profileSidebarVisible = false;
        if (this.profileMenuOutsideClickListener) {
            this.profileMenuOutsideClickListener();
            this.profileMenuOutsideClickListener = null;
        }
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        }
        else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        }
        else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    get containerClass() {
        return {
            'layout-theme-light': this.coreService.config.colorScheme === 'light',
            'layout-theme-dark': this.coreService.config.colorScheme === 'dark',
            'layout-overlay': this.coreService.config.menuMode === 'overlay',
            'layout-static': this.coreService.config.menuMode === 'static',
            'layout-static-inactive': this.coreService.state.staticMenuDesktopInactive && this.coreService.config.menuMode === 'static',
            'layout-overlay-active': this.coreService.state.overlayMenuActive,
            'layout-mobile-active': this.coreService.state.staticMenuMobileActive,
            'p-input-filled': this.coreService.config.inputStyle === 'filled',
            'p-ripple-disabled': !this.coreService.config.ripple
        }
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
