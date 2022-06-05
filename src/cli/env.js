export const parseEnv = () => {
  let result = ''
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith('RSS_')) {
      if (!result) {
        result += `${key}=${value}`;
        continue;
      }
      result += `; ${key}=${value}`;
    }
  }
  if (result) console.log(result);
};
parseEnv();
