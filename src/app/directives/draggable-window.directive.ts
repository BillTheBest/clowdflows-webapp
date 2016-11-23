import {Directive, ElementRef, EventEmitter, OnInit, Output, Renderer, OnDestroy} from '@angular/core';

@Directive({
    selector: '[draggable-window]',
    host: {
        '(dragstart)': 'onDragStart($event)',
        '(dragend)': 'onDragEnd($event)',
        '(drag)': 'onDrag($event)'
    }
})
export class DraggableWindow implements OnDestroy, OnInit {
    private Δx:number = 0;
    private Δy:number = 0;

    constructor(private el:ElementRef, private renderer:Renderer) {
    }

    public ngOnInit():void {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'true');
    }

    onDragStart(event:MouseEvent) {
        this.Δx = event.x - this.el.nativeElement.offsetLeft;
        this.Δy = event.y - this.el.nativeElement.offsetTop;
    }

    onDrag(event:MouseEvent) {
        this.doTranslation(event.x, event.y);
    }

    onDragEnd(event:MouseEvent) {
        this.Δx = 0;
        this.Δy = 0;
    }

    doTranslation(x:number, y:number) {
        if (!x || !y) return;
        this.renderer.setElementStyle(this.el.nativeElement, 'top', (y - this.Δy) + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'left', (x - this.Δx) + 'px');
    }

    public ngOnDestroy():void {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'false');
    }

}