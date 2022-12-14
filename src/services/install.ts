import { execaCommand } from "execa";

interface options {
  isDev?: boolean;
}

export const install = async (
  packages: string[],
  { isDev = false }: options = {}
) => {
  const command = `pnpm i ${packages.join(" ")} ${isDev ? "-D" : ""}`;
  await execaCommand(command);
};
