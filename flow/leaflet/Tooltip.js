declare type LeafletTooltipOptions = {
    pane?: string,
    offset?: LeafletPoint,
    direction?: string,
    permanent?: boolean,
    sticky?: boolean,
    interactive?: boolean,
    opacity?: number
}

declare interface LeafletTooltip extends LeafletDivOverlay<LeafletTooltip> {

}
