# Var das Multas (VDM)

Handoff completo da landing page do projeto Var das Multas (VDM), organizado pelo GTRM Studio. Este repositório reúne as versões Desktop e Mobile da interface, com foco em preservar a fidelidade visual e facilitar a implementação final em ambiente de produção.

## Visão Geral

Este projeto contém o handoff completo das versões Desktop e Mobile da landing page do VDM.

O material foi estruturado para atender duas frentes:

- servir como referência visual e técnica para desenvolvimento;
- reduzir ambiguidades na interpretação da direção de arte;
- acelerar validações rápidas sem depender, necessariamente, da montagem integral da aplicação.

## Estrutura de Pastas

O conteúdo principal do projeto está concentrado em `components/`.

### `components/design`

A pasta `design` está dividida entre as versões:

- `desktop`
- `mobile`

Dentro de cada uma delas, a organização segue a mesma lógica:

- `tsx`: componentes originais com a estrutura e a lógica do handoff;
- `html`: fallback estático para conferência visual rápida e validação imediata de layout.

Resumo da estrutura:

```text
components/
  design/
    variables.json
    desktop/
      tsx/
      html/
    mobile/
      tsx/
      html/
```

## Tokens de Design

Toda a fidelidade visual do projeto, incluindo:

- cores;
- tipografia;
- border radius;
- espaçamentos;

está documentada no arquivo `components/design/variables.json`.

O projeto utiliza Tailwind CSS com esses tokens injetados, garantindo consistência entre o handoff e a implementação visual. Na prática, esse arquivo funciona como a fonte central de referência para reproduzir o design com precisão.

## Filosofia de Colaboração

Este código deve ser entendido como um **Guia de Alta Fidelidade**.

Isso significa que os arquivos entregues não precisam ser tratados como uma estrutura rígida ou definitiva de produção. O desenvolvedor tem liberdade total para:

- refatorar componentes;
- simplificar a árvore de renderização;
- reorganizar a arquitetura;
- reconstruir partes da interface;
- eliminar excessos e bloat típicos de exportações automatizadas.

O objetivo deste handoff não é impor uma implementação literal, e sim evitar adivinhações. As medidas, cores, tipografia, espaçamentos e comportamentos visuais já estão registrados para que a entrega final respeite o que foi definido pela direção de arte, com margem técnica para adaptação, otimização e ganho de performance.

Em outras palavras: use este material como referência confiável de fidelidade, e não como limitação estrutural.

## Assets

As imagens e os ícones estão organizados localmente na pasta `components/assets`, separados por formato.

Estrutura geral:

- `components/assets/images/png`
- `components/assets/images/jpg`
- `components/assets/icons/svg`
- `components/assets/icons/png`

Essa separação facilita a inspeção, a troca de formatos e a integração dos recursos visuais na implementação final.
