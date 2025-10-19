// Specify the file extension you want to import
// source: https://docs.astro.build/en/recipes/add-yaml-support/
declare module "*.yml" {
  const value: any; // Add type definitions here if desired
  export default value;
}
