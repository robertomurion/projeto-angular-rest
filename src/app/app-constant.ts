export class AppConstant {
public static get baseServidor(): string {return 'http://localhost:8080/'; }

public static get baseLogin(): string { return this.baseServidor + 'projetospringrestapi/login'; }

public static get baseUrl(): string { return this.baseServidor + 'projetospringrestapi/usuario/'; }

public static get baseUrlPath(): string { return this.baseServidor + 'projetospringrestapi/'; }
}
