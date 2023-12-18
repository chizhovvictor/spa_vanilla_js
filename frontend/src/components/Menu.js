import MenuButton from "./MenuButton.js";

export default class MainMenu {
  constructor() {
    this.buttons = [
      new MenuButton("New Game", () => {
        // Обработчик клика для кнопки "New Game"
        console.log("Clicked New Game");
        // Здесь можете добавить логику для перехода на другое меню или выполнения других действий
      }),
      new MenuButton("About Us", () => {
        // Обработчик клика для кнопки "About Us"
        console.log("Clicked About Us");
        // Здесь можете добавить логику для перехода на другое меню или выполнения других действий
      }),
      new MenuButton("Settings", () => {
        // Обработчик клика для кнопки "Settings"
        console.log("Clicked Settings");
        // Здесь можете добавить логику для перехода на другое меню или выполнения других действий
      }),
      // Добавьте нужные кнопки с соответствующими обработчиками
    ];
  }

  async getHtml() {
    const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));

    return buttonsHtml.map(html => `
      <div class="row">
        <div class="d-flex justify-content-end">
          ${html}
        </div>
      </div>
    `).join('');
  }
}