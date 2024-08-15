async function CopyText() {
    const text = "mc.skiise.ru";
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {

    }
}
