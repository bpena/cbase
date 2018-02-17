///<reference path="../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnDestroy, OnInit {
  @ViewChild('lNav') lNav: MatSidenav;
  @ViewChild('rNav') rNav: MatSidenav;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private sidenavService: SidenavService,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.sidenavService.getLeftSidenav()
      .subscribe(() => this.lNav.toggle());

    this.sidenavService.getRigthSidenav()
      .subscribe(() => this.rNav.toggle());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
