import {spawn} from 'child_process';

let isTapped = false;

const exec = (commands: string) => {
  spawn(commands, { stdio: "inherit", shell: true });
};
export class TypedCssModulesPlugin {
  apply(compiler: any) {
    if (isTapped) return;
    compiler.hooks.afterPlugins.tap("TypedScssModulesPlugin", async () => {
      try {
        exec('npm run tcm:watch')
      }
      catch(error) {
        console.error(error);
      }
    });
    isTapped = true;
  }
}
