import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, HostListener } from '@angular/core';
import { Point } from '../../interfaces/point';
import { Value } from '../../interfaces/value';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  host: {
    "[style.display]": "display ? 'inline-block' : 'none'"
  },
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit, OnChanges {
  
  @Input() containerSize!: Point;
  @Input() value: Value = { price: 0, timestamp: 0 };
  @Input() display: boolean = false;
  @Input() offset: Point = { x: 20, y: 10 };

  @Input() point: Point = { x: 0, y: 0 };
  
  constructor(
    private hostRef: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['point']) {
        const label: HTMLElement = this.hostRef.nativeElement;
        const val = this.point;
        label.style.left = this.getX(val.x, label.clientWidth, this.offset.x, this.containerSize.x) + 'px';
        label.style.top = this.getY(val.y, label.clientHeight +this.offset.y, this.containerSize.y) + 'px';
      }
  }

  ngOnInit(): void {
    if (!this.containerSize) throw new TypeError('containerSize Input is required')
  }

  private getX(pos: number, size: number, offset: number, max: number) {
    size += offset;
    return size + pos > max ?
            pos - size : pos + offset
  }

  private getY(pos: number, size: number, max: number) {
    return Math.max(2, Math.min(max-size-2, pos - size/2 ));
  }

}
