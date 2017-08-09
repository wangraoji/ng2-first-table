import { Component ,Output,EventEmitter} from '@angular/core';
@Component({
    selector: '[ng2-st-caption]',
    templateUrl: './caption.component.html',
    styleUrls: ['./caption.component.scss'],
})

export class Ng2FirstTableCaptionComponent {
    // 删除按钮
    @Output() toolDelete = new EventEmitter<any>();


}