// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'], // Arquivos ignorados pelo ESLint
  },
  eslint.configs.recommended, // Configurações padrão do ESLint
  ...tseslint.configs.recommendedTypeChecked, // Configurações recomendadas para TypeScript com type checking
  eslintPluginPrettierRecommended, // Integração com Prettier
  {
    languageOptions: {
      globals: {
        ...globals.node, // Globais do Node.js
        ...globals.jest, // Globais para Jest
      },
      ecmaVersion: 2020, // Atualizado para suportar ES2020
      sourceType: 'module', // Usando módulos ES6
      parserOptions: {
        project: './tsconfig.json', // Especifica o tsconfig
        tsconfigRootDir: import.meta.dirname, // Diretório raiz do tsconfig
      },
    },
  },
  {
    rules: {
      // Regras ajustadas para TypeScript
      '@typescript-eslint/no-explicit-any': 'off', // Permitir uso de `any` em casos necessários
      '@typescript-eslint/no-floating-promises': 'warn', // Avisar sobre promessas não tratadas
      '@typescript-eslint/no-unsafe-argument': 'warn', // Avisar sobre argumentos inseguros
      '@typescript-eslint/no-unsafe-call': 'off', // Desativar erro para chamadas inseguras (ajuda com decoradores)
      '@typescript-eslint/no-unsafe-member-access': 'off', // Desativar erro de acesso inseguro a membros
      '@typescript-eslint/no-unsafe-assignment': 'off', // Desativar erro de atribuição insegura

      // Regras adicionais
      'prettier/prettier': 'error', // Erros de estilo são tratados como erros
      'no-console': 'warn', // Avisar sobre console.log
      'no-unused-vars': 'off', // Desativado em favor da regra do TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignorar variáveis iniciadas com "_"
    },
  },
);
