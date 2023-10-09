import { Inversion } from "./inversion";

interface NotificacaoService {
  enviarMensagem(mensagem: string): void;
}

const KEY = "NotificacaoService";

@Inversion.Injectable()
class EmailService implements NotificacaoService {
  enviarMensagem(mensagem: string) {
    console.log(`Enviando e-mail: ${mensagem}`);
  }
}

@Inversion.Injectable()
class SMSNotificationService implements NotificacaoService {
  enviarMensagem(mensagem: string) {
    console.log(`Enviando SMS: ${mensagem}`);
  }
}

Inversion.container.bind<NotificacaoService>(KEY).to(EmailService);
// Inversion.container
//   .bind<NotificacaoService>("NotificacaoService")
//   .to(SMSNotificationService);

@Inversion.Injectable()
class NotificacaoServiceClient {
  constructor(
    @Inversion.Inject(KEY)
    private notificacaoService: NotificacaoService,
  ) {}

  enviarNotificacao(mensagem: string) {
    this.notificacaoService.enviarMensagem(mensagem);
  }
}

const notificacaoServiceClient = Inversion.container.resolve(
  NotificacaoServiceClient,
);

notificacaoServiceClient.enviarNotificacao("Olá, mundo!");
