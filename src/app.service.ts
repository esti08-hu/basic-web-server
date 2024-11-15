import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  name(): string {
    return 'My name is Estifanos Ameha!';
  }

  hobby(): string {
    return `My hobbies are:
🖥️ Coding – I love learning new programming languages and building projects.
🎨 Painting – I love expressing my creativity on canvas.
📚 Reading – Getting lost in a good book is one of my favorite pastimes.
    `;
  }

  dream(): string {
    return `My dreams are:
To develop my own app 📱 – I want to bring my ideas to life by creating an app that users find valuable and enjoyable.
To live a life full of adventure 🌟 – I want to embrace new experiences and make unforgettable memories.
To travel the world 🌍✈️ – I dream of exploring different cultures and experiencing new places.
`;
  }
}
