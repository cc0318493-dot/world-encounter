declare global {
  interface Window {
    ePub: (path: string, options?: Record<string, unknown>) => EpubBook;
  }

  interface EpubBook {
    renderTo(element: HTMLElement | string, options?: Record<string, unknown>): EpubRendition;
    loaded: {
      navigation: Promise<EpubNavigation>;
      spine: Promise<unknown>;
    };
    navigation: {
      toc: EpubTocItem[];
    };
    destroy(): void;
  }

  interface EpubRendition {
    display(target?: string): Promise<void>;
    next(): Promise<void>;
    prev(): Promise<void>;
    on(event: string, callback: (...args: unknown[]) => void): void;
    destroy(): void;
    themes: {
      fontSize(size: string): void;
    };
  }

  interface EpubNavigation {
    toc: EpubTocItem[];
  }

  interface EpubTocItem {
    id: string;
    href: string;
    label: string;
    subitems?: EpubTocItem[];
  }
}

export {};
