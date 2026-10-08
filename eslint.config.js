import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"

const SourceImportExtensions = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow TypeScript and JavaScript extensions in relative imports"
        },
        fixable: "code",
        schema: [],
        messages: {
            unexpectedExtension: "Relative source imports must not include .ts, .tsx, .js, or .jsx extensions."
        }
    },
    create(context) {
        function checkSource(sourceNode) {
            if (!sourceNode || typeof sourceNode.value !== "string") {
                return
            }

            const source = sourceNode.value
            if (!source.startsWith(".") || !/\.(?:ts|tsx|js|jsx)$/i.test(source)) {
                return
            }

            context.report({
                node: sourceNode,
                messageId: "unexpectedExtension",
                fix: (fixer) => fixer.replaceText(sourceNode, JSON.stringify(source.replace(/\.(?:ts|tsx|js|jsx)$/i, "")))
            })
        }

        return {
            ImportDeclaration(node) {
                checkSource(node.source)
            },
            ExportNamedDeclaration(node) {
                checkSource(node.source)
            },
            ExportAllDeclaration(node) {
                checkSource(node.source)
            },
            ImportExpression(node) {
                checkSource(node.source)
            }
        }
    }
}

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        plugins: {
            local: {
                rules: {
                    "source-import-extensions": SourceImportExtensions
                }
            }
        },
        rules: {
            indent: ["error", 4],
            "comma-dangle": ["error", "never"],
            quotes: ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
            "eol-last": ["error", "always"],
            "@typescript-eslint/no-explicit-any": "error",
            "local/source-import-extensions": "error",
            "no-restricted-syntax": [
                "error",
                {
                    selector: "TSAsExpression[typeAnnotation.type=\"TSTypeReference\"][typeAnnotation.typeName.name=\"const\"]",
                    message: "Do not use const assertions."
                }
            ]
        },
        languageOptions: {
            globals: globals.browser
        }
    }
])
