import { Action, Middleware, Dispatch } from 'redux';
import { Epic } from './epic';
interface Options<D = any> {
    dependencies?: D;
}
export interface EpicMiddleware<T extends Action, O extends T = T, S = void, D = any> extends Middleware<{}, S, Dispatch<any>> {
    run(rootEpic: Epic<T, O, S, D>): () => void;
}
export declare function createEpicMiddleware<T extends Action, O extends T = T, S = void, D = any>(options?: Options<D>): EpicMiddleware<T, O, S, D>;
export {};
//# sourceMappingURL=createEpicMiddleware.d.ts.map