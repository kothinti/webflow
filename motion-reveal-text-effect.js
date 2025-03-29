<script type="module">
    import { animate, hover } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm"

    hover(".nav-link", (element) => {
        const text = element.querySelectorAll(".nav-link-label")

        animate(text, { y: -42 }, { duration: 0.3 })

        return () => {
            animate(text, { y: 0 }, { duration: 0.3 })
        }
    })
</script>
