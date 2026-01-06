import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const filename = process.argv[2];

if (!filename) {
	console.error("使用方法: npx ts-node format-ids.ts <ファイル名>");
	process.exit(1);
}

try {
	const content = readFileSync(filename, "utf-8");
	const lines = content
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line.length > 0);

	const formatted = lines.map((id) => `"${id}"`).join(",\n");

	const outputPath = join(dirname(filename), "formatted.txt");
	writeFileSync(outputPath, formatted, "utf-8");
	console.log(`出力完了: ${outputPath}`);
} catch (error) {
	if (error instanceof Error) {
		console.error(`エラー: ${error.message}`);
	}
	process.exit(1);
}
