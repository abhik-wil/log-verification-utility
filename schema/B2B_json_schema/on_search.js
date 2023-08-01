module.exports = {
  $id: "http://example.com/schema/onSearchSchema",
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
          const: "on_search",
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
        catalog: {
          type: "object",
          properties: {
            fulfillments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  type: {
                    type: "string",
                  },
                },
                required: ["id", "type"],
              },
            },
            payments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
                  type: {
                    type: "string",
                    enum: [
                      "PRE-FULFILLMENT",
                      "ON-FULFILLMENT",
                      "POST-FULFILLMENT",
                    ],
                  },
                },
                required: ["id", "type"],
              },
            },
            descriptor: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                short_desc: {
                  type: "string",
                },
                long_desc: {
                  type: "string",
                },
                images: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      url: {
                        type: "string",
                      },
                    },
                    required: ["url"],
                  },
                },
              },
              required: ["name", "short_desc", "long_desc", "images"],
            },
            providers: {
              type: "array",
              items: {
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
                      code: {
                        type: "string",
                      },
                      short_desc: {
                        type: "string",
                      },
                      long_desc: {
                        type: "string",
                      },
                      additional_desc: {
                        type: "object",
                        properties: {
                          url: {
                            type: "string",
                          },
                          content_type: {
                            type: "string",
                          },
                        },
                        required: ["url", "content_type"],
                      },
                      images: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            url: {
                              type: "string",
                            },
                          },
                          required: ["url"],
                        },
                      },
                    },
                    required: [
                      "name",
                      "code",
                      "short_desc",
                      "long_desc",
                      "additional_desc",
                      "images",
                    ],
                  },
                  rating: {
                    type: "string",
                  },
                  ttl: {
                    type: "string",
                  },
                  locations: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
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
                            code: {
                              type: "string",
                            },
                            name: {
                              type: "string",
                            },
                          },
                          required: ["code", "name"],
                        },
                        state: {
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
                        area_code: {
                          type: "string",
                        },
                      },
                      required: [
                        "id",
                        "gps",
                        "address",
                        "city",
                        "state",
                        "country",
                        "area_code",
                      ],
                    },
                  },
                  creds: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                        },
                        type: {
                          type: "string",
                        },
                        desc: {
                          type: "string",
                        },
                        url: {
                          type: "string",
                        },
                      },
                      required: ["id", "type", "desc", "url"],
                    },
                  },
                  tags: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        code: {
                          type: "string",
                        },
                        list: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                              },
                              value: {
                                type: "string",
                              },
                            },
                            required: ["code", "value"],
                          },
                        },
                      },
                      required: ["code", "list"],
                    },
                  },
                  items: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                        },
                        parent_item_id: {
                          type: "string",
                        },
                        descriptor: {
                          type: "object",
                          properties: {
                            name: {
                              type: "string",
                            },
                            code: {
                              type: "string",
                            },
                            short_desc: {
                              type: "string",
                            },
                            long_desc: {
                              type: "string",
                            },
                            images: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  url: {
                                    type: "string",
                                  },
                                },
                                required: ["url"],
                              },
                            },
                            media: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  mimetype: {
                                    type: "string",
                                  },
                                  url: {
                                    type: "string",
                                  },
                                },
                                required: ["mimetype", "url"],
                              },
                            },
                          },
                          required: [
                            "name",
                            "code",
                            "short_desc",
                            "long_desc",
                            "images",
                            "media",
                          ],
                        },
                        creator: {
                          type: "object",
                          properties: {
                            descriptor: {
                              type: "object",
                              properties: {
                                name: {
                                  type: "string",
                                },
                                contact: {
                                  type: "object",
                                  properties: {
                                    name: {
                                      type: "string",
                                    },
                                    address: {
                                      type: "object",
                                      properties: {
                                        full: {
                                          type: "string",
                                        },
                                      },
                                      required: ["full"],
                                    },
                                    phone: {
                                      type: "string",
                                    },
                                    email: {
                                      type: "string",
                                    },
                                  },
                                  required: [
                                    "name",
                                    "address",
                                    "phone",
                                    "email",
                                  ],
                                },
                              },
                              required: ["name", "contact"],
                            },
                          },
                          required: ["descriptor"],
                        },
                        price: {
                          type: "object",
                          properties: {
                            currency: {
                              type: "string",
                            },
                            value: {
                              type: "string",
                            },
                            offered_value: {
                              type: "string",
                            },
                            maximum_value: {
                              type: "string",
                            },
                          },
                          required: [
                            "currency",
                            "value",
                            "offered_value",
                            "maximum_value",
                          ],
                        },
                        quantity: {
                          type: "object",
                          properties: {
                            unitized: {
                              type: "object",
                              properties: {
                                measure: {
                                  type: "object",
                                  properties: {
                                    unit: {
                                      type: "string",
                                      enum: [
                                        "unit",
                                        "dozen",
                                        "gram",
                                        "kilogram",
                                        "tonne",
                                        "litre",
                                        "millilitre",
                                      ],
                                    },
                                    value: {
                                      type: "string",
                                    },
                                  },
                                  required: ["unit", "value"],
                                },
                              },
                              required: ["measure"],
                            },
                            available: {
                              type: "object",
                              properties: {
                                measure: {
                                  type: "object",
                                  properties: {
                                    unit: {
                                      type: "string",
                                      enum: [
                                        "unit",
                                        "dozen",
                                        "gram",
                                        "kilogram",
                                        "tonne",
                                        "litre",
                                        "millilitre",
                                      ],
                                    },
                                    value: {
                                      type: "string",
                                    },
                                  },
                                  required: ["unit", "value"],
                                },
                                count: {
                                  type: "string",
                                },
                              },
                              required: ["measure", "count"],
                            },
                            maximum: {
                              type: "object",
                              properties: {
                                measure: {
                                  type: "object",
                                  properties: {
                                    unit: {
                                      type: "string",
                                      enum: [
                                        "unit",
                                        "dozen",
                                        "gram",
                                        "kilogram",
                                        "tonne",
                                        "litre",
                                        "millilitre",
                                      ],
                                    },
                                    value: {
                                      type: "string",
                                    },
                                  },
                                  required: ["unit", "value"],
                                },
                                count: {
                                  type: "string",
                                },
                              },
                              required: ["measure", "count"],
                            },
                          },
                          required: ["unitized", "available", "maximum"],
                        },
                        category_ids: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                        },
                        fulfillment_ids: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                        },
                        location_ids: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                        },
                        payment_ids: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                        },
                        "add-ons": {
                          type: "array",
                          items: {
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
                                  short_desc: {
                                    type: "string",
                                  },
                                  long_desc: {
                                    type: "string",
                                  },
                                  images: {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        url: {
                                          type: "string",
                                        },
                                      },
                                      required: ["url"],
                                    },
                                  },
                                },
                                required: [
                                  "name",
                                  "short_desc",
                                  "long_desc",
                                  "images",
                                ],
                              },
                              price: {
                                type: "object",
                                properties: {
                                  currency: {
                                    type: "string",
                                  },
                                  value: {
                                    type: "string",
                                  },
                                  offered_value: {
                                    type: "string",
                                  },
                                  maximum_value: {
                                    type: "string",
                                  },
                                },
                                required: [
                                  "currency",
                                  "value",
                                  "offered_value",
                                  "maximum_value",
                                ],
                              },
                            },
                            required: ["id", "descriptor", "price"],
                          },
                        },
                        cancellation_terms: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              fulfillment_state: {
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
                              refund_eligible: {
                                type: "string",
                              },
                              return_policy: {
                                type: "object",
                                properties: {
                                  return_eligible: {
                                    type: "string",
                                  },
                                  return_within: {
                                    type: "string",
                                  },
                                  fulfillment_managed_by: {
                                    type: "string",
                                  },
                                  return_location: {
                                    type: "object",
                                    properties: {
                                      address: {
                                        type: "string",
                                      },
                                      gps: {
                                        type: "string",
                                      },
                                    },
                                    required: ["address", "gps"],
                                  },
                                },
                                required: [
                                  "return_eligible",
                                  "return_within",
                                  "fulfillment_managed_by",
                                  "return_location",
                                ],
                              },
                            },
                            if: {
                              properties: {
                                fulfillment_state: {
                                  properties: {
                                    descriptor: {
                                      properties: {
                                        code: {
                                          const: "Order-delivered",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            then: {
                              required: ["fulfillment_state", "return_policy"],
                            },
                            else: {
                              required: [
                                "fulfillment_state",
                                "refund_eligible",
                              ],
                            },
                          },
                        },
                        replacement_terms: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              replace_within: {
                                type: "string",
                              },
                            },
                            required: ["replace_within"],
                          },
                        },
                        time: {
                          type: "object",
                          properties: {
                            label: {
                              type: "string",
                            },
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
                          required: ["label", "range"],
                        },
                        matched: {
                          type: "string",
                        },
                        recommended: {
                          type: "string",
                        },
                        tags: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              code: {
                                type: "string",
                              },
                              list: {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    code: {
                                      type: "string",
                                    },
                                    value: {
                                      type: "string",
                                    },
                                  },
                                  required: ["code", "value"],
                                },
                              },
                            },
                            required: ["code", "list"],
                          },
                        },
                      },
                      required: [
                        "id",
                        "parent_item_id",
                        "descriptor",
                        "creator",
                        "price",
                        "quantity",
                        "category_ids",
                        "fulfillment_ids",
                        "location_ids",
                        "payment_ids",
                        "cancellation_terms",
                        "replacement_terms",
                        "time",
                        "matched",
                        "recommended",
                        "tags",
                      ],
                    },
                  },
                  offers: {
                    type: "array",
                    items: {
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
                            code: {
                              type: "string",
                            },
                            short_desc: {
                              type: "string",
                            },
                            long_desc: {
                              type: "string",
                            },
                            images: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  url: {
                                    type: "string",
                                  },
                                },
                                required: ["url"],
                              },
                            },
                          },
                          required: [
                            "name",
                            "code",
                            "short_desc",
                            "long_desc",
                            "images",
                          ],
                        },
                        location_ids: {
                          type: "array",
                          items: {},
                        },
                        category_ids: {
                          type: "array",
                          items: {},
                        },
                        item_ids: {
                          type: "array",
                          items: {},
                        },
                        time: {
                          type: "object",
                          properties: {
                            label: {
                              type: "string",
                            },
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
                          required: ["label", "range"],
                        },
                      },
                      required: [
                        "id",
                        "descriptor",
                        "location_ids",
                        "category_ids",
                        "item_ids",
                        "time",
                      ],
                    },
                  },
                  fulfillments: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
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
                      required: ["contact"],
                    },
                  },
                },
                required: [
                  "id",
                  "descriptor",
                  "ttl",
                  "locations",
                  "creds",
                  "tags",
                  "items",
                  "fulfillments",
                ],
              },
            },
          },
          required: ["fulfillments", "payments", "descriptor", "providers"],
        },
      },
      required: ["catalog"],
    },
    search: {
      type: "array",
      items: {
        $ref: "searchSchema#",
      },
    },
  },
  required: ["context", "message"],
};
