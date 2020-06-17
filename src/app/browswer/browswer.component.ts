import { Component, OnInit, Input, OnChanges, Pipe } from '@angular/core';
import { DEVICES_RESOLUTIONS } from './devices';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-browswer',
  templateUrl: './browswer.component.html',
  styleUrls: ['./browswer.component.css']
})
export class BrowswerComponent implements OnInit, OnChanges {
  @Input() device: string;
  @Input() url: string;
  @Input() scale: number;

  height: number;
  width: number;
  urlCache = new Map<string, SafeResourceUrl>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.height = DEVICES_RESOLUTIONS.get(this.device)[0];
    this.width = DEVICES_RESOLUTIONS.get(this.device)[1];
  }

  ngOnChanges(changes){
    console.log(this.urlCache);
  }

  browswerURL(){
    let target = this.urlCache.get(this.url);
    if(!target){
      target = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.urlCache.set(this.url, target);
    }
    return target;
  }

}
