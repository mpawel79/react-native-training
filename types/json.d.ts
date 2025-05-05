declare module "*.json" {
  const value: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  export default value;
} 