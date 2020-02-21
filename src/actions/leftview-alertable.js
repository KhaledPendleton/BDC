export function leftviewAlertable(node) {
    let shouldTick = true;

    function getScrollPosition() {
		return window.scrollY;
    }
    
    function getNodeHeight() {
        const boundingRect = node.getBoundingClientRect();
		return boundingRect.height;
    }

    function nodeIsInView(scrollPosition, nodeHeight) {
		return (getScrollPosition() < getNodeHeight());
    }
    
    function tick() {
        const scrollPosition = getScrollPosition();
        const nodeHeight = getNodeHeight();
        const inView = nodeIsInView(scrollPosition, nodeHeight);

        if (inView && shouldTick) {
            window.requestAnimationFrame(tick);
        } else {
            node.dispatchEvent(new CustomEvent('leftview', {}));
        }
    }

    window.requestAnimationFrame(tick);

    return {
        destroy() {
            shouldTick = false;
        }
    };
}