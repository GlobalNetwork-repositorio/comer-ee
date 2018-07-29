import { ModuloSistemaConfigModule } from './modulo-sistema-config.module';

describe('ModuloSistemaConfigModule', () => {
  let moduloSistemaConfigModule: ModuloSistemaConfigModule;

  beforeEach(() => {
    moduloSistemaConfigModule = new ModuloSistemaConfigModule();
  });

  it('should create an instance', () => {
    expect(moduloSistemaConfigModule).toBeTruthy();
  });
});
