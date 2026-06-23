
(function () {
    // ---- Module data ----
    // Lectures.zip

    const modules = [
        { num: 1, filename: "Chapter 1. Introduction to Socket Programming", topic: "Introduction to Socket Programming" },
        { num: 2, filename: "Chapter 2. Developing Networking Skills and Network Management", topic: "Developing Networking Skills and Network Management" },
        { num: 3, filename: "Chapter 3. Number theory", topic: "Number Theory" },
        { num: 4, filename: "Chapter 4. Public key cryptography", topic: "Public Key Cryptography" },
        { num: 5, filename: "Chapter 5. Message Authentication and Hash Functions", topic: "Message Authentication and Hash Functions" },
        { num: 6, filename: "Chapter 6. Digital Signatures & Authentication Protocols", topic: "Digital Signatures & Authentication Protocols" },
        { num: 7, filename: "Chapter 7. Network Security", topic: "Network Security" },
        { num: 8, filename: "Chapter 8. Wireless Network Security", topic: "Wireless Network Security" },
        { num: 9, filename: "Chapter 9. System Security", topic: "System Security" }
    ];

    // Build table rows
    const tbody = document.querySelector("#modulesTable tbody");
    modules.forEach(m => {
        const tr = document.createElement("tr");
        // File naming convention: slides/ModuleX.pdf and slides/ModuleX.pptx
        // Adjust if your actual file names differ (e.g., Module1-Intro.pdf)
        const pdfHref = `lectures/${m.filename}.pdf`;
        const pptHref = `lectures/${m.filename}.pptx`;
        const notesHref = `notes.html?module=${m.num}`;  // Link to notes page
        tr.innerHTML = `
         <td><strong>${m.num}</strong></td>
        <td>${m.topic}</td>
        <td><a href="${pdfHref}" target="_blank" title="Download PDF"><i class="fas fa-file-pdf"></i></a></td>
        <td><a href="${pptHref}" target="_blank" title="Download PPT"><i class="fas fa-file-powerpoint"></i></a></td>
        <td><a href="${notesHref}" title="Lecture Notes & Practice"><i class="fas fa-book"></i></a></td>
        `;
        tbody.appendChild(tr);
    });

    // ---- Dark/light mode toggle with localStorage ----
    const toggleBtn = document.getElementById("modeToggle");
    const icon = toggleBtn.querySelector("i");
    const storedTheme = localStorage.getItem("theme");

    function setTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            document.documentElement.removeAttribute("data-theme");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    }

    // System preference if no stored theme
    if (storedTheme) {
        setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dark");
    }

    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // offset for fixed header
            if (window.scrollY >= sectionTop) {
                currentId = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentId}`) {
                link.classList.add("active");
            }
        });
    });

})();

