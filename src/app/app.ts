import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('my-app2');

  confetti: number[] = [];
  balloons = ['🎈', '🎈', '🎈', '🎈', '🎈'];

  private timeoutIds: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    this.celebrate();
  }

  celebrate(): void {
    this.confetti = Array.from({ length: 100 }, (_, i) => i);

    const timeout = setTimeout(() => {
      this.confetti = [];
    }, 6000);

    this.timeoutIds.push(timeout);
  }


}
