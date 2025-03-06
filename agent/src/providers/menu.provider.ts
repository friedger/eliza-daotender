import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

const menuProvider: Provider = {
    get: async (
        _runtime: IAgentRuntime,
        message: Memory,
        _state?: State
    ): Promise<string> => {
        // Check if this is a menu-related request
        const text = message.content.text.toLowerCase().trim();
        const hasMenu = text.includes("menu");

        if (!hasMenu) {
            return "";
        }

        return [
            "Soft drink, Fritz Lemonade (rhubarb, lemon, orange), at 3.00€",
            "Trotinette, Alcohol-free beer, at 3.50€",
            "Grisette Blonde, Light & Fresh 5,5%, at 4.00a€",
            "Grisette Blanche, Fresh & Citrus 5,5%, at 4.00€",
            "Zinnebir, Malty Pale ale 5,8%, at 4.00€",
            "Taras Boulba, Extra hoppy 4,5%, at 4.00€",
            "Strong Beer, Jambe de Bois, Hoppy Belgian triple - 8%, at 4.50€",
            "Mug, Reusable mug, at 5.00€",
        ].join("\n");
    },
};

export default menuProvider;
