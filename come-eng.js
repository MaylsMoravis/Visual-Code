document.addEventListener("DOMContentLoaded", function () {
    const codeLink = document.getElementById("code-link");
    const animationLink = document.getElementById("animation-link");
    const textLink = document.getElementById("text-link");
    const stillLink = document.getElementById("still-link");

    const content = document.getElementById("content");

    const topics = {
        code: {
            title: "Code",
            description: "Here you can find various coding tutorials and examples.",
            image: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLDU_IGBhl3Vw6vxPwa_ifLFTFjOjZEu04Q&s' alt='Code Image' width='560' height='315' />"
        },
        animation: {
            title: "Animation",
            description: "Learn how to create stunning animations with CSS and JavaScript.",
            image: "<img src='https://www.amitmerchant.com/images/bracket-pairs-guide.gif' alt='Animation Image' width='560' height='315' />"
        },
        text: {
            title: "Text",
            description: "Explore various text styles, fonts, and effects.",
            image: "<img src='https://i.ytimg.com/vi/cv_Cs_kt0R0/maxresdefault.jpg' alt='Text Image' width='560' height='315' />"
        },
        still: {
            title: "Still",
            description: "Check out some creative still images and visual effects.",
            image: "<img src='https://raw.githubusercontent.com/zzzprojects/learn-orm/master/tutorials/visual-studio-code/images/user-interface-1.png' alt='Still Image' width='560' height='315' />"
        }
    };

    function updateContent(topic) {
        const selectedTopic = topics[topic];
        content.innerHTML = `
            <h4>${selectedTopic.title}</h4>
            <p>${selectedTopic.description}</p>
            ${selectedTopic.image}
        `;
    }

    codeLink.addEventListener("click", function () {
        updateContent("code");
    });

    animationLink.addEventListener("click", function () {
        updateContent("animation");
    });

    textLink.addEventListener("click", function () {
        updateContent("text");
    });

    stillLink.addEventListener("click", function () {
        updateContent("still");
    });
});
