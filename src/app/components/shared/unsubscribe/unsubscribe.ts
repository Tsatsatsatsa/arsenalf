import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class Unsubscribe implements OnDestroy {
    destroy$: Subject<void> = new Subject<void>()

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}