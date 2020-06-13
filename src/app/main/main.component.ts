
import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItems } from '../core/menu/menu-items/menu-items';
import { PageTitleService } from '../core/page-title/page-title.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import PerfectScrollbar from 'perfect-scrollbar';

const screenfull = require('screenfull');


@Component({
    selector: 'app-main-layout',
    templateUrl: './main-material.html',
    styleUrls: ['./main-material.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {
    private _router: Subscription;
    header: string;
    currentLang = 'en';
    url: string;
    showSettings = false;
    dark: boolean;
    boxed: boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    customizerIn = false;
    headerGreen = false;
    headerRed = false;
    headerYellow = false;
    root = 'ltr';
    myroot = 'ltr';
    collapsedClass: any = 'side-panel-opened';
    chatpanelOpen = false;
    themeHeaderSkinColor: any = 'header-default';
    themeSidebarSkinColor: any = 'sidebar-default';

    private _mediaSubscription: Subscription;
    sidenavOpen = true;
    sidenavMode = 'side';
    isMobile = false;
    private _routerEventsSubscription: Subscription;

    isFullscreen = false;

    @ViewChild('sidenav') sidenav;

    constructor(public menuItems: MenuItems, private pageTitleService: PageTitleService,
        private router: Router, private media: MediaObserver) {

    }

  ngOnInit() {
    
      this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });

        this._router = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });

        if (this.url !== '/session/login' && this.url !== '/session/register'
            && this.url !== '/session/forgot-password' && this.url !== '/session/lockscreen') {

            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');

            if (window.matchMedia(`(min-width: 960px)`).matches) {
                const ps = new PerfectScrollbar(elemSidebar, {
                              wheelSpeed: 2,
                              suppressScrollX: true
                            });

            }
        }
        if (this.media.isActive('xs') || this.media.isActive('sm')) {
            this.sidenavMode = 'over';
            this.sidenavOpen = false;
        }
        this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
            const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');

            this.isMobile = isMobile;
            this.sidenavMode = (isMobile) ? 'over' : 'side';
            this.sidenavOpen = !isMobile;
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd && this.isMobile) {
            this.sidenav.close();
          }
        });
    }

    ngOnDestroy() {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }


    menuMouseOver(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'over';
        }
    }

    menuMouseOut(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'side';
        }
    }

    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    }

    customizerFunction() {
        this.customizerIn = !this.customizerIn;
    }
    headerSkinColorFunction(color) {
        this.themeHeaderSkinColor = color;
    }
    sidebarSkinColorFunction(color) {
        this.themeSidebarSkinColor = color;
    }
    addMenuItem(): void {
        this.menuItems.add({
            state: 'error',
            name: 'SILK MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                {state: '404', name: 'SUB MENU1'},
                {state: '404', name: 'SUB MENU2'}
            ]
        });
    }
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }



}


