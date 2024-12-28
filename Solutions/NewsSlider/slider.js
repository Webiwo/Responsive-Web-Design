class Slider {
    constructor(query, opts) {

        const defaultOpts = {
            startSlide: 0,
            timeout: 5000,
            maxWidth: "900px",
            height: "350px",
            image: "images/ny.jpg",
            buttons: true,
            paginator: true
        }
        this.options = { ...defaultOpts, ...opts };

        this.slider = document.querySelector(query);
        this.slides = [...this.slider.querySelectorAll(".slider-slide")];
        this.continer = this.slider.parentNode;
        this.continer.style.maxWidth = this.options.maxWidth;
        this.continer.style.height = this.options.height;
        this.continer.style.backgroundImage = `url(${this.options.image})`;
        this.autoChange = typeof this.options.timeout === "number" && this.options.timeout > 0;

        if (this.options.buttons) this.createPrevNextButtons();
        if (this.options.paginator) this.createPagination();
        this.setSlide(this.options.startSlide);
        if (this.autoChange) this.handleMouse();
    }

    createPrevNextButtons() {
        this.btnPrev = document.createElement("button");
        this.btnPrev.innerText = "Previous";
        this.btnPrev.classList.add("slider-button-prev", "btn-prev-img");
        this.btnPrev.addEventListener("click", () => this.slidePrev());

        this.btnNext = document.createElement("button");
        this.btnNext.innerText = "Next";
        this.btnNext.classList.add("slider-button-next", "btn-next-img");
        this.btnNext.addEventListener("click", () => this.slideNext())

        this.slider.append(this.btnPrev);
        this.slider.append(this.btnNext);
    }

    slidePrev() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        this.setSlide(this.currentSlide);
    }

    slideNext() {
        this.currentSlide++;
        if (this.currentSlide > this.slides.length - 1) {
            this.currentSlide = 0;
        }
        this.setSlide(this.currentSlide);
    }

    createPagination() {
        this.dots = document.createElement("div");
        this.dots.classList.add("slider-paginator");

        this.slides.forEach((el, i) => {
            const btn = document.createElement("button");
            btn.classList.add("slider-paginator-button");
            btn.innerText = i + 1;
            btn.addEventListener("click", () => this.setSlide(i));
            this.dots.append(btn);
        });

        this.slider.append(this.dots);
    }

    setSlide(slideIndex) {
        if (slideIndex > this.slides.length - 1) slideIndex = 0;
        this.slides.forEach(slide => {
            slide.classList.remove("is-active");
        })
        this.slides[slideIndex].classList.add("is-active");
        this.setPaginator(slideIndex);
        this.currentSlide = slideIndex;

        clearTimeout(this.time);
        this.setAnimationTimeout();
    }

    setPaginator(slideIndex) {
        if (this.options.paginator) {
            const dots = [...this.dots.children];
            dots.forEach(dot => {
                dot.classList.remove("is-active");
            })
            dots[slideIndex].classList.add("is-active");
        }
    }

    handleMouse() {
        this.slider.addEventListener("mouseover", () => clearTimeout(this.time));
        this.slider.addEventListener("mouseout", () => {
            clearTimeout(this.time)
            this.setAnimationTimeout();
        })
    }

    setAnimationTimeout() {
        if (this.autoChange) {
            this.time = setTimeout(() => this.slideNext(), this.options.timeout);
        }
    }

}

const mainOptions = {
    startSlide: 3,
    timeout: 4000,
    height: "270px"
}
const slider = new Slider("#mainSlider", mainOptions);


const nextOptions = {
    timeout: 7000,
    image: "images/night.jpg",
    height: "330px",
    buttons: false
}
const nextSlider = new Slider("#nextSlider", nextOptions);


const simpleOptions = {
    startSlide: 1,
    timeout: 0,
    image: "images/water.jpg",
    height: "200px",
    maxWidth: "800px",
    paginator: false
}
const simpleSlider = new Slider("#simpleSlider", simpleOptions);
