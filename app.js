var panels = document.querySelectorAll(".panel");

panels.forEach(function(item) {
	item.addEventListener("click", function(event) {
		panels.forEach(function(panel) {
			panel.style.flex = 1;
			panel.children[0].style.transform = "translateY(-100%)";
			panel.children[2].style.transform = "translateY(100%)";
		});
		this.style.flex = 5;
		this.children[0].style.transform = "translateY(0)";
		this.children[2].style.transform = "translateY(0)";
	});
});