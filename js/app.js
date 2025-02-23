document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key == "Escape")e.target.value = "";
        document.querySelectorAll("#table-android tr").forEach(app =>{
            app.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?app.classList.remove("filtro")
            :app.classList.add("filtro")
        })
    }
})
    document.addEventListener('DOMContentLoaded', function() {
        const toggleSwitch = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.body.classList.add(currentTheme);

            if (currentTheme === 'dark-mode') {
                toggleSwitch.checked = true;
            }
        }

        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    });

