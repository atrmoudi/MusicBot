module.exports = {
  TOKEN:
    "MTIzMTE3MDk5MjY2MDAyNTQ4NQ.G5nWh-.ozRN7oEEa7OwKjaZW3eAH6Q9KKIaG_eTF21X_E",
  ownerID: ["660364603968061668", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL:
    "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: "MYSTRO",
  commandsDir: "./commands",
  language: "en",
  embedColor: "00fbff",
  errorLog: "",

  sponsor: {
    status: true,
    url: "https://www.youtube.com/@GlaceYT",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: [
      "back",
      "channel",
      "clear",
      "dj",
      "filter",
      "loop",
      "nowplaying",
      "pause",
      "playnormal",
      "playlist",
      "queue",
      "resume",
      "save",
      "play",
      "skip",
      "stop",
      "time",
      "volume",
    ],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false,
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
        "shuffle",
      ],
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },
    },

    maxVol: 150,
  },
};
