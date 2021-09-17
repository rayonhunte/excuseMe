import { Injectable } from "@angular/core";
import { State, StateContext, Action, NgxsOnInit, Actions } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ExcusesService } from "../shared/excuses.service";
import * as excuses from "../store/excuse.action";

interface ExcuseStateModel {
    excuses: Array<any>
}

@State<ExcuseStateModel>({
    name: 'excuse',
    defaults: {
        excuses: [],
    }
})

@Injectable()
export class ExcuseState implements NgxsOnInit {
    constructor(private excuseService: ExcusesService) { }

    ngxsOnInit(ctx: StateContext<ExcuseStateModel>) {
        ctx.dispatch([new excuses.GetExcuses()]);
    }


    // @Action(excuses.GetExcuses)
    // getExcuses(ctx: StateContext<ExcuseStateModel>) {
    //     return this.excuseService.collectionOnce$().pipe(
    //         tap(
    //             (excuse: any) => {
    //                 console.log(excuse);
    //                 ctx.patchState({
    //                     excuses: excuse
    //                 });
    //             }
    //         )
    //     );
    // }
}