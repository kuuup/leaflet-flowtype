declare interface LeafletIconOptions extends LeafletLayerOptions {
    iconUrl: string,
    iconRetinaUrl?: string,
    iconSize?: LeafletPoint,
    iconAnchor?: LeafletPoint,
    popupAnchor?: LeafletPoint,
    shadowUrl?: string,
    shadowRetinaUrl?: string,
    shadowSize?: LeafletPoint,
    shadowAnchor?: LeafletPoint,
    className?: string,
    pane?: string
}

declare interface LeafletIconInterface<T> extends LeafletLayer<T> {

    _icon: HTMLElement;

    options: LeafletIconOptions,
    Default: LeafletIconDefault,
    createIcon(oldIcon?: HTMLElement): HTMLElement,
    createShadow(oldIcon?: HTMLElement): HTMLElement
}

declare interface LeafletIconDefault extends LeafletIcon {
    imagePath: string
}

declare interface LeafletIcon extends LeafletIconInterface<LeafletIcon> {

}
