export interface SessionState {
  all: Array<any>;
  current: any;
  version: string;
  online: boolean;
}

export interface TrackState {
  all: Array<any>;
  count: number;
  playing: boolean;
  current: any;
  handle: any;
  playStatus: any;
}

export interface FavouriteState {
  songs: Array<any>;
  length: number;
  fmtLength: string;
}

export interface PlaylistState {
  all: Array<any>;
}

export interface GreetingsState {
  all: Array<any>
}

export interface State {
  session: SessionState;
  tracks: TrackState;
  greetings: GreetingsState;
  favourite: FavouriteState;
}

export type StoreGetter = (state: State, getters: any, rootState: State) => any;
export type StoreAction = (injectee: ActionContext<State, State>, payload: any) => any;

export interface StoreActionContext extends ActionContext<State, State> {

}

export declare class Store<S> {
  constructor(options: StoreOptions<S>);

  state: S;
  getters: any;

  replaceState(state: S): void;

  dispatch: Dispatch;
  commit: Commit;

  subscribe<P extends Payload>(fn: (mutation: P, state: S) => any): () => void;
  watch<T>(getter: (state: S) => T, cb: (value: T) => void, options?: any): void;

  registerModule<T>(path: string, module: Module<T, S>): void;
  registerModule<T>(path: string[], module: Module<T, S>): void;

  unregisterModule(path: string): void;
  unregisterModule(path: string[]): void;

  hotUpdate(options: {
    actions?: ActionTree<S, S>;
    mutations?: MutationTree<S>;
    getters?: GetterTree<S, S>;
    modules?: ModuleTree<S>;
  }): void;
}

export interface Dispatch {
  (type: string, payload?: any): Promise<any[]>;
  <P extends Payload>(payloadWithType: P): Promise<any[]>;
}

export interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;
  getters: any;
  rootState: R;
}

export interface Payload {
  type: string;
}

export interface CommitOptions {
  silent?: boolean;
}

export interface StoreOptions<S> {
  state?: S;
  getters?: GetterTree<S, S>;
  actions?: ActionTree<S, S>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<S>;
  plugins?: Plugin<S>[];
  strict?: boolean;
}

export type Getter<S, R> = (state: S, getters: any, rootState: R) => any;
export type Action<S, R> = (injectee: ActionContext<S, R>, payload: any) => any;
export type Mutation<S> = (state: S, payload: any) => any;
export type Plugin<S> = (store: Store<S>) => any;

export interface Module<S, R> {
  state?: S;
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}

export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}

export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

export interface ModuleTree<R> {
  [key: string]: Module<any, R>;
}
