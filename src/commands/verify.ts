import {
  CommandInteraction,
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  ModalActionRowComponentBuilder,
} from "discord.js";
import { verifyModal } from "../models/verifyModal";

export const data = new SlashCommandBuilder()
  .setName("verify")
  .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
  const modal = new ModalBuilder().setCustomId("myModal").setTitle("My Modal");

  const favoriteColorInput = new TextInputBuilder()
    .setCustomId("favoriteColorInput")
    .setLabel("What's your favorite color?")
    .setStyle(TextInputStyle.Short);

  const hobbiesInput = new TextInputBuilder()
    .setCustomId("hobbiesInput")
    .setLabel("What are some of your favorite hobbies?")
    .setStyle(TextInputStyle.Paragraph);

  const firstActionRow =
    new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
      favoriteColorInput
    );

  const secondActionRow =
    new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
      hobbiesInput
    );

  modal.addComponents(firstActionRow, secondActionRow);
}
