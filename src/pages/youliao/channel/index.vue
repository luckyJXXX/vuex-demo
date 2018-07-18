<template>
<div class="channel-wrapper">
<div class="main-table">
        <div class="table-title">有料发帖</div>
        <div class="search">
          <div class="search-tiezi">
            <span>搜索贴近号</span>
            <input type="text" placeholder="请输入帖子名称">
          </div>
          <div class="create-bind" @click="openDialog">新建绑定</div>
        </div>
        <div class="table">
          <el-table :data="tableData" class="el-table">
            <el-table-column prop="name" label="贴近号" style="background-color: #eee;">
            </el-table-column>
            <el-table-column prop="feedId" label="贴近号ID">
            </el-table-column>
            <el-table-column prop="channelName" label="绑定的网易有料频道名">
            </el-table-column>
            <el-table-column prop="channelId" label="绑定的网易有料频道ID">
            </el-table-column>
            <el-table-column prop="time" label="创建时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">绑定修改</el-button>
              </template>   
            </el-table-column>
          </el-table>
          <div class="block pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
        </div>
    
      </div>
       <Dialog ref="dialog" :dialogFormVisible="dialogFormVisible"></Dialog>
</div>
      
     
</template>

<script>
  import Siderbar from "../../../components/sidebar";
  import Topheader from "../../../components/topheader";
  import Dialog from "../../../components/dialog";
  export default {
    name: "feed",
    components: {
      Siderbar,
      Topheader,
      Dialog
    },
    data() {
      return {
        dialogFormVisible: false,
        value13: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
            name: "教务所",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "知识局",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "耍事台",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "吹风会",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "吹风会",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "吹风会",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "吹风会",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },{
            name: "吹风会",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            feedId: "政治频道",
            channelName: "知事局",
            channelId: '1234567',
            time: "2018-05-23 16:23"
          }
        ]
      };
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      openDialog() {
        this.dialogFormVisible = true;
      }
    },
  
    
  };
</script>

<style lang="less" scoped>
  .main-table {
        width: 100%;
        background: rgb(246, 246, 246);
        border-top: 1px solid rgb(246, 246, 246);
        padding-bottom: 40px;
        .table-title {
          margin: 20px auto auto 40px;
        }
        .search {
          position: relative;
          display: flex;
          flex-direction: row;
          height: 80px;
          line-height: 80px;
          margin: 20px 40px;
          background: #fff;
          border-bottom: 1px solid #efefef;
          
          .search-tiezi {
            >input {
              height: 40px;
              width: 180px;
              border: 1px solid #efefef;
              margin-left: 10px;
              border-radius: 3px;
            }
          }
          .create-bind {
            position: absolute;
            top: 20px;
            right: 10px;
            border-radius: 3px;
            text-align: center;
            width: 140px;
            height: 40px;
            line-height: 40px;
            color: #333;
            background: #FDDB00;
          }
        }
        .table {
          margin: 0 40px;
          border-radius: 20px;
          .el-table {
            border-radius: 4px;
          }
        }
        .pagination {
          padding: 60px 0 40px 0;
          background: #fff;
          text-align: center;
        }
      }
</style>

