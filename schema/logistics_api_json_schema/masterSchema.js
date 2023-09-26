module.exports = {
  $id: "http://example.com/schema/masterSchema",
  type: "object",
  properties: {
    search: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/searchSchema#",
      },
    },
    on_search: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onSearchSchema#",
      },
    },
    init: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/initSchema#",
      },
    },
    on_init: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onInitSchema#",
      },
    },
    confirm: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/confirmSchema#",
      },
    },
    on_confirm: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onConfirmSchema#",
      },
    },
    update: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/updateSchema#",
      },
    },
    on_update: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onUpdateSchema#",
      },
    },
    status: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/statusSchema#",
      },
    },

    on_status: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onStatusSchema#",
      },
    },
    support: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/supportSchema#",
      },
    },
    on_support: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onSupportSchema#",
      },
    },
    track: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/trackSchema#",
      },
    },
    on_track: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onTrackSchema#",
      },
    },
    cancel: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/cancelSchema#",
      },
    },
    on_cancel: {
      type: "array",
      items: {
        $ref: "logistics/v1.1/onCancelSchema#",
      },
    },
  },
};
