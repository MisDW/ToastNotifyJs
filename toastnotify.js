var toastBox = document.createElement("div")
    toastBox.style.position = "fixed"
    toastBox.style.top = "0px"
    toastBox.style.right = "0px"
    toastBox.style.width = "250px"
    toastBox.style.height = "100%"
    toastBox.style.padding = "10px 20px"
    toastBox.style.overflow = "hidden"

let html = document.body
    html.appendChild(toastBox)

class ToastNotifiJs{
    constructor() {
        this.icons = {            
            Info : `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>`,
            Error : `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg> `,
            Warn : `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 16h.01" /></svg>`,
            Success : `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>`
        }

        this.div = (type, message, background, color) =>{
            // div element notify
            var element = document.createElement("div")
            element.className = "notification"
            element.id = type
            element.style.borderRadius = "5px"
            element.style.backgroundColor = background
            element.style.color = color
            element.style.padding = "10px"
            element.style.fontSize = "12px"
            element.style.fontFamily = "Arial"
            element.style.textWrap = "nowrap"
            element.style.display = "flex"
            element.style.gap = "10px"
            element.style.alignItems = "center"
            element.style.margin = "10px 0px"
            element.style.userSelect = "none"
            element.style.cursor = "pointer"
            element.style.position = "relative"
            element.style.right = "-200%"
            element.style.transition = "0.5s ease"
            toastBox.appendChild(element)
            element.innerHTML = `${this.icons[type]} ${message}`
            setTimeout(() => {
                element.style.right = "0px"
            }, 500);
            setTimeout(() => {
                element.style.opacity = "0"
            }, 4500);
            setTimeout(() => {
                element.style.opacity = "0"
                element.remove()
            }, 5000);
        }

        this.typeNotify = {
            Info: ( type, message, background, color) => {
                try {
                    background === "default" ? this.div(type, message, background = "#3C90D1", color = "#f4f4f4") : this.div(type, message, background, color) 
                } catch (error) {
                    console.warn(error);
                }
            },
            Error: (type, message, background, color) =>{
                try {
                    background === "default" ? this.div(type, message, background = "#E14D45", color = "#f4f4f4") : this.div(type, message, background, color) 
                } catch (error) {
                    console.warn(error)
                }
                },
            Warn: ( type, message, background, color) => {
                try {
                    background === "default" ? this.div(type, message, background = "#ED991D", color = "#f4f4f4") : this.div(type, message, background, color)                 
                } catch (error) {
                    console.warn(error);
                }
            },
            Success: (type, message, background, color) =>{
                try {
                    background === "default" ? this.div(type, message, background = "#2ECC71", color = "#f4f4f4") : this.div(type, message, background, color) 
                } catch (error) {
                    console.warn(error);                
                }
            }
        }
    }

    create(type = "info", message = "Undefined Example toast", background = "#ffff", color = "#000000"){    
        this.typeNotify[type](type, message, background, color)
    }

}
