const db = require("pro.db")
module.exports = {
  name:"set-channel",
  description:"Select welcome channel",
  cooldown:10,
  userPerms:["ADMINISTRATOR"],
  options:[
    {
      name:"channel",
      description:"select one pls",
      type:"CHANNEL",
      channelTypes:["GUILD_TEXT"],
      required:true,
    },
  ],
  run : async(interaction, client,args ) => {
    await interaction.deferReply()
    let ch = interaction.options.getChannel("channel")

    await db.set(`ch_${interaction.guild.id}`,ch.id)

    await ch.send({content:`ā | This Channel has been selceted for welcome\nš¤ | Action by : ${interaction.user.tag}`})

    await interaction.editReply({content:`ā Done\nāļø Check here : ${ch}`})


  }
}
