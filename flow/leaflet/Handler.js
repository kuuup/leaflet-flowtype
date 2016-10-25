declare interface LeafletHandler<T> {
    enable(): T,
    disable(): T,
    enabled(): boolean,
    addHooks(): void,
    removeHooks(): void
}
