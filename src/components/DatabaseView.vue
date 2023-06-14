<template>
<div style="flex-grow: 1">
  <table>
    <thead>
      <th v-for="column in columns" :key="column">
        {{ column }}
      </th>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="col in columns" :key="`row-${row.id}-cell-${col}`">
                {{row[col]}}
            </td>
            <td width="75px">
                <button @click="deleteRow(row.id)">Delete</button>
            </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<style lang="scss" scoped>
       th, td, table {
            border: 1px solid;
        }
    table {
    display: table;
    border-collapse: collapse;
    width: 100%;
    }

</style>
<script>
export default {
  data() {
    return {
      rows: [],
    };
  },
  props: {
    dbName: String,
    eventName: String,
  },
  computed: {
    columns() {
      try {
        return Object.keys(
          this.$database.database.tables.find((db) => db.name === this.dbName).columns
        )
      } catch {
        return []
      }
    }
  },
  methods: {
    async deleteRow(id) {
        const deleted = await this.$database.remove({
            from: this.dbName,
            where: {
                id,
            }
        })
        if (deleted > 0) {
            this.getRows();
        }
    },
    async getRows() {
        this.rows = await this.$database.select({
            from: this.dbName,
        })
    }
  },
  mounted() {
    
    this.getRows();
    if (this.eventName) {
    window.addEventListener(this.eventName, this.getRows)
    }

  },
  beforeUnmount() {
  if (this.eventName) {
    window.removeEventListener(this.eventName, this.getRows)
    }
  }
}
</script>
