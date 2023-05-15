{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "REST API",
    "description": ""
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/": {
      "get": {
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/movies/": {
      "get": {
        "description": "",
        "parameters": [{
          "name": "authorization",
          "in": "header",
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/movies/{id}": {
      "get": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "example": "any"
                },
                "genres": {
                  "example": "any"
                },
                "year": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/movies/post": {
      "post": {
        "description": "",
        "parameters": [{
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "id": {
                  "example": "any"
                },
                "title": {
                  "example": "any"
                },
                "genres": {
                  "example": "any"
                },
                "year": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/movies/{name}": {
      "get": {
        "description": "",
        "parameters": [{
          "name": "name",
          "in": "path",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/users/": {
      "get": {
        "description": "",
        "parameters": [{
            "name": "page",
            "in": "query",
            "type": "string"
          },
          {
            "name": "size",
            "in": "query",
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [{
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "id": {
                  "example": "any"
                },
                "email": {
                  "example": "any"
                },
                "gender": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                },
                "role": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/users/{id}": {
      "get": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "example": "any"
                },
                "gender": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                },
                "role": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [{
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/auth/register": {
      "post": {
        "description": "",
        "parameters": [{
          "name": "body",
          "in": "body",
          "schema": {
            "type": "object",
            "properties": {
              "id": {
                "example": "any"
              },
              "email": {
                "example": "any"
              },
              "gender": {
                "example": "any"
              },
              "password": {
                "example": "any"
              },
              "role": {
                "example": "any"
              }
            }
          }
        }],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/auth/login": {
      "post": {
        "description": "",
        "parameters": [{
          "name": "body",
          "in": "body",
          "schema": {
            "type": "object",
            "properties": {
              "email": {
                "example": "any"
              },
              "password": {
                "example": "any"
              }
            }
          }
        }],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    }
  },
  "definitions": {
    "openapi": {
      "type": "string",
      "example": "3.0.0"
    },
    "info": {
      "type": "object",
      "properties": {
        "version": {
          "type": "string",
          "example": "0.1.0"
        },
        "title": {
          "type": "string",
          "example": "Express API with Swagger"
        },
        "description": {
          "type": "string",
          "example": "This is a CRUD API application made with Express and documented with Swagger"
        }
      }
    },
    "components": {
      "type": "object",
      "properties": {
        "securitySchemes": {
          "type": "object",
          "properties": {
            "bearerAuth": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "http"
                },
                "in": {
                  "type": "string",
                  "example": "hedaer"
                },
                "name": {
                  "type": "string",
                  "example": "Authorization"
                },
                "description": {
                  "type": "string",
                  "example": "Bearer token to access these api endpoints"
                },
                "scheme": {
                  "type": "string",
                  "example": "bearer"
                },
                "bearerFormat": {
                  "type": "string",
                  "example": "JWT"
                }
              }
            }
          }
        }
      }
    },
    "security": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "bearerAuth": {
            "type": "array",
            "example": [],
            "items": {}
          }
        }
      }
    },
    "servers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "example": "http://localhost:8080"
          }
        }
      }
    }
  }
}