module.exports = {
  $id: "http://example.com/schema/onUpdateSchema",
  type: "object",
  properties: {
    context: {
      type: "object",
      properties: {
        domain: {
          type: "string",
          const: "ONDC:RET10",
        },
        location: {
          type: "object",
          properties: {
            city: {
              type: "object",
              properties: {
                code: {
                  type: "string",
                },
              },
              required: ["code"],
            },
            country: {
              type: "object",
              properties: {
                code: {
                  type: "string",
                },
              },
              required: ["code"],
            },
          },
          required: ["city", "country"],
        },
        action: {
          type: "string",
          const: "on_update",
        },
        version: {
          type: "string",
          const: "2.0.1",
        },
        bap_id: {
          type: "string",
        },
        bap_uri: {
          type: "string",
        },
        bpp_id: {
          type: "string",
        },
        bpp_uri: {
          type: "string",
        },
        transaction_id: {
          type: "string",
        },
        message_id: {
          type: "string",
        },
        timestamp: {
          type: "string",
          format: "date-time",
        },
        ttl: {
          type: "string",
          const: "PT30S",
        },
      },
      required: [
        "domain",
        "location",
        "action",
        "version",
        "bap_id",
        "bap_uri",
        "bpp_id",
        "bpp_uri",
        "transaction_id",
        "message_id",
        "timestamp",
        "ttl",
      ],
    },
    message: {
      type: "object",
      properties: {
        order: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            state: {
              type: "string",
              enum: [
                "Created",
                "Accepted",
                "In-progress",
                "Cancelled",
                "Completed",
              ],
            },
            provider: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                },
              },
              required: ["id"],
            },
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  quantity: {
                    type: "object",
                    properties: {
                      count: {
                        type: "integer",
                      },
                    },
                    required: ["count"],
                  },
                  fulfillment_ids: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                },
                required: ["id", "quantity", "fulfillment_ids"],
              },
            },
            payment: {
              type: "object",
              properties: {
                uri: {
                  type: "string",
                },
                tl_method: {
                  type: "string",
                },
                params: {
                  type: "object",
                  properties: {
                    currency: {
                      type: "string",
                    },
                    transaction_id: {
                      type: "string",
                    },
                    amount: {
                      type: "string",
                    },
                  },
                  required: ["currency", "amount"],
                },
                status: {
                  type: "string",
                  enum: ["PAID", "NOT-PAID"],
                },
                type: {
                  type: "string",
                  enum: [
                    "PRE-FULFILLMENT",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                  ],
                },
                collected_by: {
                  type: "string",
                },
                "@ondc/org/buyer_app_finder_fee_type": {
                  type: "string",
                },
                "@ondc/org/buyer_app_finder_fee_amount": {
                  type: "string",
                },
                "@ondc/org/settlement_details": {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      settlement_counterparty: {
                        type: "string",
                      },
                      settlement_phase: {
                        type: "string",
                      },
                      settlement_type: {
                        type: "string",
                      },
                      upi_address: {
                        type: "string",
                      },
                      settlement_bank_account_no: {
                        type: "string",
                      },
                      settlement_ifsc_code: {
                        type: "string",
                      },
                      beneficiary_name: {
                        type: "string",
                      },
                      bank_name: {
                        type: "string",
                      },
                      branch_name: {
                        type: "string",
                      },
                    },
                    required: ["settlement_counterparty", "settlement_type"],
                  },
                },
              },
              required: [
                "uri",
                "tl_method",
                "params",
                "status",
                "type",
                "collected_by",
                "@ondc/org/buyer_app_finder_fee_type",
                "@ondc/org/buyer_app_finder_fee_amount",
              ],
            },
            fulfillments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  "@ondc/org/provider_name": {
                    type: "string",
                  },
                  state: {
                    type: "object",
                    properties: {
                      descriptor: {
                        type: "object",
                        properties: {
                          code: {
                            type: "string",
                          },
                        },
                        required: ["code"],
                      },
                    },
                    required: ["descriptor"],
                  },
                  type: {
                    type: "string",
                  },
                  tracking: {
                    type: "boolean",
                  },
                  stops: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: {
                          type: "string",
                        },
                        location: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                            },
                            descriptor: {
                              type: "object",
                              properties: {
                                name: {
                                  type: "string",
                                },
                              },
                              required: ["name"],
                            },
                            gps: {
                              type: "string",
                            },
                            address: {
                              type: "string",
                            },
                            city: {
                              type: "object",
                              properties: {
                                name: {
                                  type: "string",
                                },
                              },
                              required: ["name"],
                            },
                            country: {
                              type: "object",
                              properties: {
                                code: {
                                  type: "string",
                                },
                              },
                              required: ["code"],
                            },
                            area_code: {
                              type: "string",
                            },
                            state: {
                              type: "object",
                              properties: {
                                name: {
                                  type: "string",
                                },
                              },
                              required: ["name"],
                            },
                          },
                          required: [],
                        },
                        time: {
                          type: "object",
                          properties: {
                            range: {
                              type: "object",
                              properties: {
                                start: {
                                  type: "string",
                                },
                                end: {
                                  type: "string",
                                },
                              },
                              required: ["start", "end"],
                            },
                          },
                          required: ["range"],
                        },
                        instructions: {
                          type: "object",
                          properties: {
                            name: {
                              type: "string",
                            },
                            short_desc: {
                              type: "string",
                            },
                          },
                          required: ["name", "short_desc"],
                        },
                        contact: {
                          type: "object",
                          properties: {
                            phone: {
                              type: "string",
                            },
                            email: {
                              type: "string",
                            },
                          },
                          required: ["phone", "email"],
                        },
                      },
                      required: [
                        "type",
                        "location",
                        "time",
                        "instructions",
                        "contact",
                      ],
                    },
                  },
                  rateable: {
                    type: "boolean",
                  },
                  tags: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        descriptor: {
                          type: "object",
                          properties: {
                            code: {
                              type: "string",
                            },
                          },
                          required: ["code"],
                        },
                        list: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              descriptor: {
                                type: "object",
                                properties: {
                                  code: {
                                    type: "string",
                                  },
                                },
                                required: ["code"],
                              },
                              value: {
                                type: "string",
                              },
                            },
                            required: ["descriptor", "value"],
                          },
                        },
                      },
                      required: ["descriptor", "list"],
                    },
                  },
                },
                required: [
                  "id",
                  "@ondc/org/provider_name",
                  "state",
                  "type",
                  "stops",
                  "tags",
                ],
              },
            },
          },
          required: ["id", "state", "provider", "items"],
        },
      },
      required: ["order"],
    },
    search: {
      type: "array",
      items: {
        $ref: "searchSchema#",
      },
    },
    on_search: {
      type: "array",
      items: {
        $ref: "onSearchSchema#",
      },
    },
    init: {
      type: "array",
      items: {
        $ref: "initSchema#",
      },
    },
    on_init: {
      type: "array",
      items: {
        $ref: "onInitSchema#",
      },
    },
    confirm: {
      type: "array",
      items: {
        $ref: "confirmSchema#",
      },
    },
    on_confirm: {
      type: "array",
      items: {
        $ref: "onConfirmSchema#",
      },
    },
    update: {
      type: "array",
      items: {
        $ref: "updateSchema#",
      },
    },
  },
  required: ["context", "message"],
};
