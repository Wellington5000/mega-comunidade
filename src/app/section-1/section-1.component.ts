import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
  ],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss'
})
export class Section1Component {
  player: any;
  player2: any;
  wasMuted = true;
  wasMuted2 = true;
  checkMuteInterval: any;
  checkMuteInterval2: any; 
  players: string[] = ['player-2', 'player-1'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window['onYouTubeIframeAPIReady'] = () => this.callInitPlayers();
      } else {
        this.callInitPlayers();
      }
    }
  }

  callInitPlayers(): void {
    this.initPlayer('player-1');
    this.initPlaye2('player-2')
  }

  initPlayer(playerName: string) {
    this.player = new YT.Player(playerName, {
      height: '100%',
      width: '100%',
      videoId: '_34dvcrRj78',
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
      events: {
        onReady: this.onPlayerReady.bind(this),
        onStateChange: this.onPlayerStateChange.bind(this),
      },
    });
  }

  initPlaye2(playerName: string) {
    this.player2 = new YT.Player('player-2', {
      height: '100%',
      width: '100%',
      videoId: '_34dvcrRj78',
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
      events: {
        onReady: this.onPlayerReady2.bind(this),
        onStateChange: this.onPlayerStateChange2.bind(this),
      },
    });
  }

  onPlayerReady(event: any) {
    this.checkMuteInterval = setInterval(() => {
      if (this.player) {
        const isMuted = this.player.isMuted();

        if (!isMuted && this.wasMuted) {
          this.wasMuted = false;
        }

        if (isMuted) {
          this.wasMuted = true;
        }
      }
    }, 500);
  }

  onPlayerReady2(event: any) {
    this.checkMuteInterval2 = setInterval(() => {
      if (this.player2) {
        const isMuted = this.player2.isMuted();

        if (!isMuted && this.wasMuted2) {
          this.wasMuted2 = false;
        }

        if (isMuted) {
          this.wasMuted2 = true;
        }
      }
    }, 500);
  }

  onPlayerStateChange(event: any) {
  }

  onPlayerStateChange2(event: any) {
  }


  clearInterval(): void {
    if (this.checkMuteInterval) {
      clearInterval(this.checkMuteInterval);
    }

    if (this.checkMuteInterval2) {
      clearInterval(this.checkMuteInterval2);
    }
  }

  ngOnDestroy() {
    this.clearInterval();
  }
  
}
