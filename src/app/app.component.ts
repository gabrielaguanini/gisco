import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gisco';

  ngOnInit(): void {
    console.log(
      '%c🧠 Algunas imágenes de este sitio fueron generadas con ayuda de inteligencia artificial (IA), específicamente con ChatGPT de OpenAI.\n👉 https://openai.com/chatgpt',
      'color: #1E6F9F; font-size: 14px; font-weight: bold;'
    );
  }
}
