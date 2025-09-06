export interface ExtensionItemProps {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  toggleExtension: (id: number) => void;
  removeExtension: (id: number) => void;
}

export type ExtensionItem = Omit<
  ExtensionItemProps,
  "toggleExtension" | "removeExtension"
>;
